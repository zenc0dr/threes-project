<?php

namespace Zen\Threes\Classes\Helpers;

trait Schema
{
    /**
     * @param string $schema_code
     * @return array|null
     */
    public function getSchema(string $schema_code = 'default'): array
    {
        $schema_path = ths()->env('SCHEMES_STORAGE');
        $schema_file = $schema_path . "/$schema_code.json";
        return ths()->fromJsonFile($schema_file) ?? [];
    }

    /**
     * @param string $schema_code
     * @param string $schema_name
     * @param array $nodes
     * @return void
     */
    public function setSchema(
        array $nodes,
        string $schema_code = 'default',
        string $schema_name = 'Схема проекта',
    ): void {
        $schema_path = ths()->env('SCHEMES_STORAGE');
        $schema_file = $schema_path . "/$schema_code.json";
        $schema = [
            'schema_name' => $schema_name,
            'schema_nodes' => $nodes
        ];
        ths()->toJsonFile($schema_file, $schema);
    }
}
