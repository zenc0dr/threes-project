<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Models\Feature;

class Gen
{
    public static function run(int $feature_id)
    {
        $feature = Feature::find($feature_id);
        $self = new self();
        $self->generate($feature);
    }

    public function generate(Feature $feature)
    {

        dd($feature->data);


//        $vector = ths()->getSetting('vector');
//        $system_prompt = collect()
//            ->where('active', 1)
//            ->map(function ($prompt) {
//                return $prompt['text'];
//            })
//            ->join(PHP_EOL);
//
//        $yaml = ths()->ai(
//            $vector,
//            $system_prompt
//        );
    }
}
