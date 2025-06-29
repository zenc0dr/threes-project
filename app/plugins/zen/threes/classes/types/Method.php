<?php

namespace Zen\Threes\Classes\Types;

use Zen\Threes\Models\Node;

class Method
{
    public function template(): array
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/api.svg'),
            'name' => "Блок метод",
            'type' => 'Threes.Method',
            'data' => [
                'enabled' => true,
                'name' => 'Программный блок',
                'call' => '',
                'show_name' => true,
                'desc' => '',
                'show_desc' => false,
                'code' => '',
                'show_code' => false,
            ],
            'props' => [
                'self_content' => true,
                'show_children' => true,
                'tree' => true,
                'tree_children' => true,
                'schema' => true,
                'store' => false,
                'store_data' => [
                    'group' => 'Документы',
                    'author' => 'Threes',
                    'tags' => ["text", "document"],
                    'created_at' => now()->toDateTimeString(),
                ]
            ]
        ];
    }

    public function ui(): string
    {
        return 'Threes.Method';
    }

    public function getData(?array $data = null)
    {
        return $data;
    }

    public function setData($data, $scope, Node $node)
    {
        $parent = $node->parent;
        if ($parent) {
            $this->writeCode($node, $data);
        }

        return $data;
    }

    public function writeCode(Node $node, $data): void
    {
        $class_name = 'node_' . $node->parent->nid;
        $class_file = base_path("plugins/zen/threes/classes/methods/$class_name.php");

        # Если состояние не задано, создаём файл класса генератора и сразу подписываемся на закрытие скобкой
        if (!ths()->getState("generation.$class_name")) {
            file_put_contents($class_file, join("\n", [
                "<?php\n\n",
                "namespace Zen\Threes\Classes\Methods;",
                "class $class_name",
                "{\n",
            ]));
            ths()->setState("generation.$class_name", true);
            ths()->events()->addEvent('terminating', function () use ($class_file) {
                file_put_contents($class_file, "}\n", FILE_APPEND);
            });
        }


        $code_lines = explode("\n", $data['code']);
        $indented_code = implode("\n", array_map(fn($line) => '    ' . $line, $code_lines));
        file_put_contents($class_file, $indented_code . "\n", FILE_APPEND);
    }
}
