<?php if (!$this->fatalError): ?>
    <?= Form::open(['id' => 'layerForm']) ?>
    <?= $this->formRender() ?>
    <?= Form::close() ?>
<?php else: ?>
    <div class="error-message"><?= e(trans($this->fatalError)) ?></div>
<?php endif ?>
