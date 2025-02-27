<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Models\Sprite;

/**
 * TODO:DEPRECATED
 */
class CodeBuilder
{
    private Sprite $sprite;
    private array $nodes = [];
    private int $pipeline_index = 0;

    public function __construct(string $sid)
    {
        $this->sprite = Sprite::find($sid);
    }

    public function generate() {
        $program = $this->sprite->program;
        foreach ($program as $line) {
            foreach ($line as $node) {
                $this->nodes[] = $node;
            }
        }
        $this->handleNodes();
    }

    private function addNode(array $node): void
    {
        $this->nodes[] = $node;
    }

    private function handleNodes()
    {
        $method = null;
        $pipeline = [];

        foreach ($this->nodes as $node) {
            if (!isset($node['tid'])) {
                if ($method) {
                    $this->createPipeline($method, $pipeline);
                    $pipeline = [];
                }

                $method = $node['type'];
            } else {
                $pipeline[] = $node;
            }
        }


        $this->createPipeline($method, $pipeline);
    }

    private function createRoute()
    {

    }

    private function createPipeline($method, $pipeline)
    {
//        if ($method === 'input') {
//
//        }


        $this->pipeline_index++;
        $file_name = "Pipelines" . $this->pipeline_index;

        # Создаём класс спрайта
        $pipelines_path = ths()->checkDir(storage_path("temp/threes/pipelines/$file_name.php"));

        $file = [];
        $file[] = '<?php';
        $file[] = '';
        $file[] = 'namespace Threes\Pipelines;';
        $file[] = '';
        $file[] = '';
        $file[] = 'class Pipelines' . $this->pipeline_index;
        $file[] = '{';

        $exec_input = join(', ', $this->getIoKeysNodes($pipeline[0], 'input', '$'));
        $file[] = "    public static function exec($exec_input)";
        $file[] = '    {';

        $methods = [];
        $node_count = 0;
        foreach ($pipeline as $node) {
            $node_count++;
            if ($node_count === 1) {
                $inputs = join(', ', $this->getIoKeysNodes($node, 'input', '$'));
            } else {
                $inputs = '$result';
            }
            $file[] = '        $result = self::node' . $node_count . '(' . $inputs . ');';

            $this->addMethod($methods, $node, $node_count);
        }
        $file[] = '        return $result;';
        $file[] = '    }';

        $file = array_merge($file, $methods);

        $file[] = '}';
        file_put_contents(
            $pipelines_path,
            join(PHP_EOL, $file)
        );
    }

    private function addMethod(array &$methods, array $node, int $node_count)
    {
        $method_lines = [];
        $unit = ths()->units()->get($node['tid']);
        $call = $unit['call'];

        $call_data = ths()->sprites()->parseClassMethod($call);
        $class = $call_data['class'];
        $method = $call_data['method'];
        $method_lines[] = '    private static function node' . $node_count . '($input)';
        $method_lines[] = '    {';
        $method_lines[] = '        $node = new ' . $class . '();';
        $method_lines[] = '        $result = $node->' . $method . '($input);';
        $method_lines[] = '        return $result;';
        $method_lines[] = '    }';
        $method_lines[] = '';
        $methods = array_merge($methods, $method_lines);
    }


    /**
     * @param array $node
     * @param string $type
     * @param string $prefix
     * @return array
     */
    private function getIoKeysNodes(
        array $node,
        string $type = 'input',
        string $prefix = ''
    ): array {
        $inputs = [];
        if (isset($node['io'])) {
            foreach ($node['io'] as $pin) {
                if ($pin['io_direction'] === $type) {
                    $inputs[] = $prefix . $pin['io_key'];
                }
            }
        }
        return $inputs;
    }
}
