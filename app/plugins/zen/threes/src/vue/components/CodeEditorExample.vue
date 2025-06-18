<template>
  <div class="code-editor-example">
    <h3>Пример использования CodeEditor</h3>
    
    <div class="example-section">
      <h4>JavaScript код:</h4>
      <CodeEditor 
        v-model="javascriptCode" 
        language="javascript"
        :height="'200px'"
      />
    </div>

    <div class="example-section">
      <h4>PHP код:</h4>
      <CodeEditor 
        v-model="phpCode" 
        language="php"
        :height="'200px'"
      />
    </div>

    <div class="example-section">
      <h4>HTML код:</h4>
      <CodeEditor 
        v-model="htmlCode" 
        language="html"
        :height="'200px'"
      />
    </div>

    <div class="example-section">
      <h4>CSS код:</h4>
      <CodeEditor 
        v-model="cssCode" 
        language="css"
        :height="'200px'"
      />
    </div>

    <div class="example-section">
      <h4>Темная тема:</h4>
      <CodeEditor 
        v-model="darkCode" 
        language="python"
        theme="dark"
        :height="'200px'"
      />
    </div>
  </div>
</template>

<script>
import CodeEditor from './CodeEditor.vue'

export default {
  name: 'CodeEditorExample',
  
  components: {
    CodeEditor
  },

  data() {
    return {
      javascriptCode: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`,
      
      phpCode: `<?php
class Calculator {
    public function add($a, $b) {
        return $a + $b;
    }
    
    public function multiply($a, $b) {
        return $a * $b;
    }
}

$calc = new Calculator();
echo $calc->add(5, 3);`,
      
      htmlCode: `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Пример</title>
</head>
<body>
    <h1>Привет, мир!</h1>
    <p>Это пример HTML кода.</p>
</body>
</html>`,
      
      cssCode: `.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.button {
  background: #007cba;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}`,
      
      darkCode: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

numbers = [3, 6, 8, 10, 1, 2, 1]
sorted_numbers = quick_sort(numbers)
print(sorted_numbers)`
    }
  }
}
</script>

<style lang="scss">
.code-editor-example {
  padding: 20px;
  
  .example-section {
    margin-bottom: 30px;
    
    h4 {
      margin-bottom: 10px;
      color: #333;
    }
  }
}
</style> 