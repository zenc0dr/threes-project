<?php

namespace Zen\Threes\Classes\Sprites;

use Zen\Threes\Models\Sprite;

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
        $sprite = Sprite::find($sid);
        $sprite->program = $program;
        $sprite->save();

        return [
            'success' => 'true',
        ];
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
    public function moveNode(string $sid, string $nid, string $after_nid)
    {
        $sprite = Sprite::find($sid);
        $program = $sprite->program;

        $node_dump = null;
        $source_line_index = null;
        $source_node_index = null;
        $target_line_index = null;
        $target_node_index = null;

        // Шаг 1: Найти и удалить узел с nid
        foreach ($program as $line_index => &$line) {
            foreach ($line as $node_index => $node) {
                if ($nid === $line_index . '.' . $node_index) {
                    $node_dump = $node;
                    $source_line_index = $line_index;
                    $source_node_index = $node_index;
                }
                if ($after_nid === $line_index . '.' . $node_index) {
                    $target_line_index = $line_index;
                    $target_node_index = $node_index;
                }
            }
        }

        // Если узел для перемещения не найден, выходим
        if ($node_dump === null) {
            return;
        }

        // Удаляем узел из исходного места
        unset($program[$source_line_index][$source_node_index]);
        $program[$source_line_index] = array_values($program[$source_line_index]); // Уплотняем индексы

        // Если не нашли целевой узел, добавляем узел в конец первой строки
        if ($target_line_index === null) {
            $program[0][] = $node_dump;
        } else {
            // Вставляем узел после найденного after_nid
            array_splice($program[$target_line_index], $target_node_index + 1, 0, [$node_dump]);
        }

        // Сохраняем изменения обратно
        $sprite->program = $program;
        $sprite->save();
    }

}
