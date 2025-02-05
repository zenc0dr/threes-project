<?php

namespace Zen\Threes\Classes\Sprites;

use Zen\Threes\Models\Sprite;

use Zen\Threes\Classes\CodeBuilder;

trait Program
{
    /**
     * Сохранить программу спрайта
     * @param string $sid
     * @param array $program
     * @return string[]
     */
    public function programSave(string $sid, array $program): array
    {
        $this->stampUuids($program);

        $sprite = Sprite::find($sid);
        $sprite->program = $program;
        $sprite->save();

        return [
            'success' => 'true',
        ];
    }

    /**
     * Проставить недостающие uuids у нод в программе
     * @param array $program
     * @return void
     */
    private function stampUuids(array &$program): void
    {
        foreach ($program as &$line) {
            foreach ($line as &$node) {
                if (isset($node['tid']) && !isset($node['node'])) {
                    $node['node'] = \Str::uuid();
                }
            }
        }
    }

    public function programLoad(string $sid): array
    {
        $sprite = Sprite::find($sid);
        return [
            'success' => true,
            'program' => $sprite,
        ];
    }

    /**
     * Метод перемещения нодов
     * @param string $sid
     * @param string $nid
     * @param string $after_nid
     * @return void
     */
    public function moveNode(string $sid, string $nid, string $after_nid): void
    {
        $sprite = Sprite::find($sid);
        $program = $sprite->program;

        $node_dump = null;
        $source_line_index = null;
        $source_node_index = null;
        $target_line_index = null;
        $target_node_index = null;

        $is_target_line_only = (!str_contains($after_nid, '.'));

        foreach ($program as $line_index => &$line) {
            foreach ($line as $node_index => $node) {
                if ($nid === $line_index . '.' . $node_index) {
                    $node_dump = $node;
                    $source_line_index = $line_index;
                    $source_node_index = $node_index;
                }
                if (!$is_target_line_only && $after_nid === $line_index . '.' . $node_index) {
                    $target_line_index = $line_index;
                    $target_node_index = $node_index;
                }
            }
        }

        if ($node_dump === null) {
            return;
        }

        unset($program[$source_line_index][$source_node_index]);

        $program[$source_line_index] = array_values($program[$source_line_index]);

        if ($is_target_line_only) {
            $target_line_index = $after_nid;
            if (!isset($program[$target_line_index])) {
                $program[$target_line_index] = [];
            }
            $program[$target_line_index][] = $node_dump;
        } else {
            if ($target_line_index === null) {
                $program[0][] = $node_dump;
            } else {
                array_splice($program[$target_line_index], $target_node_index + 1, 0, [$node_dump]);
            }
        }

        $sprite->program = $program;
        $sprite->save();
    }

    public function copyNode(string $sid, string $nid): void
    {
        $sprite = Sprite::find($sid);
        $program = $sprite->program;

        $node_copy = null;
        $source_line_index = null;

        // Найти узел, который нужно скопировать
        foreach ($program as $line_index => $line) {
            foreach ($line as $node_index => $node) {
                if ($nid === $line_index . '.' . $node_index) {
                    $node_copy = $node;
                    $node_copy['node'] = \Str::uuid();
                    $source_line_index = $line_index;
                    break 2; // Выход из обоих циклов
                }
            }
        }

        // Если узел не найден, выходим
        if ($node_copy === null) {
            return;
        }

        // Создаём уникальный идентификатор для копии узла
        $node_copy['id'] = uniqid('node_', true);

        // Добавляем копию узла в конец той же строки
        $program[$source_line_index][] = $node_copy;

        // Сохраняем изменения обратно в базу данных
        $sprite->program = $program;
        $sprite->save();
    }

    /**
     * Удалить узел из программы спрайта
     *
     * @param string $sid ID спрайта
     * @param string $nid ID узла
     * @return void
     */
    public function deleteNode(string $sid, string $nid): void
    {
        $sprite = Sprite::find($sid);
        $program = $sprite->program;

        $found = false;

        // Найти и удалить узел с указанным nid
        foreach ($program as $line_index => &$line) {
            foreach ($line as $node_index => $node) {
                if ($nid === $line_index . '.' . $node_index) {

                    if (isset($node['node'])) {
                        ths()->sets()->remove($node['node']);
                    }

                    unset($line[$node_index]);
                    $line = array_values($line); // Уплотняем индексы
                    $found = true;
                    break 2; // Выходим из обоих циклов
                }
            }
        }

        // Если узел не найден, выходим
        if (!$found) {
            return;
        }

        // Сохраняем обновлённую программу обратно в базу
        $sprite->program = $program;
        $sprite->save();
    }

    /**
     * Произвести действие над линией
     * @param string $sid
     * @param string $action
     * @param int $line_index
     * @return void
     */
    public function lineActions(string $sid, string $action, int $line_index): void
    {
        if ($action === 'copy') {
            $this->lineCopyAction($sid, $action, $line_index);
        }
        if ($action === 'delete') {
            $this->lineDeleteAction($sid, $action, $line_index);
        }
    }

    /**
     * Копировать линию
     * @param string $sid
     * @param string $action
     * @param int $line_index
     * @return void
     */
    private function lineCopyAction(string $sid, string $action, int $line_index): void
    {
        $sprite = Sprite::find($sid);
        if (!$sprite) {
            return;
        }

        $program = $sprite->program;
        if (!isset($program[$line_index])) {
            return;
        }

        $line_to_copy = $program[$line_index];
        $line_copy = [];
        foreach ($line_to_copy as $node) {
            $node_copy = $node;
            $node_copy['node'] = \Str::uuid();
            $line_copy[] = $node_copy;
        }

        array_splice($program, $line_index + 1, 0, [$line_copy]);

        $sprite->program = $program;
        $sprite->save();
    }

    /**
     * Удалить линию
     * @param string $sid
     * @param string $action
     * @param int $line_index
     * @return void
     */
    private function lineDeleteAction(string $sid, string $action, int $line_index): void
    {
        $sprite = Sprite::find($sid);
        if (!$sprite) {
            return;
        }

        $program = $sprite->program;
        if (!isset($program[$line_index])) {
            return;
        }

        foreach ($program[$line_index] as $node) {
            if (isset($node['node'])) {
                ths()->sets()->remove($node['node']);
            }
        }

        unset($program[$line_index]);

        $program = array_values($program);

        $sprite->program = $program;
        $sprite->save();
    }

    public function buildCode(string $sid)
    {
        $code_builder = new CodeBuilder($sid);
        $code_builder->generate();
    }
}
