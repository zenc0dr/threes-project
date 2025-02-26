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
        return $value + $value * 2;
    }

    /**
     * Для тестирования формирования ui
     * Вызов: Zen.Units.TestClass.uiOutput
     * @param int $value
     * @return string
     */
    public function uiOutput(int $value = 0): string
    {
        return "<span style='color:green;font-weight:bold;'>$value</span>";
    }

    public function foo($value) {
        return "Результат будет: $value";
    }

    public function condition($value)
    {
        if ($value > 5) {
            return true;
        }
        return false;
    }

    public function intToArray($value): array
    {
        return [
            $value,
            $value,
            $value,
            $value,
            $value
        ];
    }
}
