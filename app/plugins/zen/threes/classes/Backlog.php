<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Feature;

class Backlog
{
    use SingletonTrait;

    public function handleVector(): void
    {
        $vector = ths()->getSetting('vector');
        $system_prompt = ths()->getSetting('vector_prompt');

        $yaml = ths()->ai(
            $vector,
            $system_prompt
        );

        //$yaml = file_get_contents(storage_path('ai_answer.txt'));

        file_put_contents(
            storage_path('ai_answer.txt'),
            $yaml
        );

        $this->generateBacklog($yaml);
    }

    public function generateBacklog(string $yaml = null): void
    {
        Feature::truncate();

        if (!$yaml) {
            $yaml = ths()->fromYamlFile(
                storage_path('vector/backlog_vector.yaml')
            );
        } else {
            $yaml = ths()->fromYaml($yaml);
        }

        $id_cnt = 0;

        $ids = [];
        foreach ($yaml as $feature) {
            $id = $feature['id'];
            if (!isset($ids[$id])) {
                $id_cnt++;
                $ids[$id] = $id_cnt;
            }
            $id = $ids[$id];
            $name = $feature['title'];
            $description = $feature['description'];
            $category = $feature['category'];
            $priority = $feature['priority'];
            $status = $feature['status'];
            $tags = $feature['tags'];
            $dependencies = $feature['dependencies'];
            $acceptance_criteria = $feature['acceptance_criteria'];
            $parent_id = $feature['parent_id'] ? $ids[$feature['parent_id']] : null;
            $module = $feature['module'];

            Feature::create([
                'id' => $id,
                'parent_id' => $parent_id,
                'name' => $name,
                'description' => $description,
                'category' => $category,
                'priority' => $priority,
                'status' => $status,
                'module' => $module,
                'acceptance_criteria' => $acceptance_criteria,
            ]);
        }
    }
}
