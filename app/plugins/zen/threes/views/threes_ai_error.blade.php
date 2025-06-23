<!DOCTYPE html>
<html lang="en" class="bg-gray-100">
<head>
    <meta charset="UTF-8">
    <title>Threes Debug Error</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex items-center justify-center min-h-screen p-6">
<div class="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
    <h1 class="text-2xl font-bold text-red-600 mb-4">🚨 Ошибка Threes</h1>
    <p class="text-gray-800 mb-2"><strong>{{ $errorClass }}</strong>: {{ $errorMessage }}</p>
    <p class="text-gray-600 mb-4">В файле: <code class="bg-gray-200 p-1 rounded">{{ $errorFile }}:{{ $errorLine }}</code></p>

    <h2 class="text-lg font-semibold mb-2">Trace:</h2>
    <pre class="bg-gray-900 text-green-400 p-4 rounded mb-4 overflow-x-auto text-sm">{{ $errorTrace }}</pre>

    <button id="copyBtn" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        📋 Скопировать в буфер
    </button>
</div>

<script>
    document.getElementById('copyBtn').addEventListener('click', function () {
        const text = `{{ $errorClass }}: {{ $errorMessage }}\nIn: {{ $errorFile }}:{{ $errorLine }}\nTrace:\n{{ $errorTrace }}`;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () {
                alert('✅ Скопировано в буфер обмена!');
            }).catch(function (err) {
                fallbackCopyTextToClipboard(text);
            });
        } else {
            fallbackCopyTextToClipboard(text);
        }
    });

    function fallbackCopyTextToClipboard(text) {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        try {
            const successful = document.execCommand('copy');
            if (successful) {
                alert('✅ Скопировано в буфер обмена!');
            } else {
                alert('❌ Не удалось скопировать!');
            }
        } catch (err) {
            alert('❌ Ошибка копирования: ' + err);
        }

        document.body.removeChild(textarea);
    }
</script>

</body>
</html>
