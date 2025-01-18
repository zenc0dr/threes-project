<?php

namespace Zen\Units;

class TestClass
{
    # Вызов: Zen.Units.TestClass.testMethod
    public function testMethod(string $input_string)
    {
        return [
            'output' => $input_string . ' from output',
            'output2' => $input_string . ' from output2'
        ];
    }

    /**
     * Вызов: Zen.Units.TestClass.adder
     * @param int|null $value
     * @return int|null
     */
    public function adder(int $value = null): ?int
    {
        if ($value === null) {
            return 0;
        }
        return $value + 1;
    }
}
