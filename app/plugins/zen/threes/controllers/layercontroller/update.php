<?php if (!$this->fatalError): ?>
    <?= Form::open(['id' => 'layerForm', 'class' => 'layout']) ?>
    <div class="layout-row">
        <div>Пока что нужно было запомнить что это был за слой какого нода, если забыл открой заново.</div>
        <?= $this->formRender() ?>
    </div>
    <div class="form-buttons">
        <div class="loading-indicator-container">
            <button
                type="submit"
                data-request="onSave"
                data-request-data="redirect:0"
                data-hotkey="ctrl+s, cmd+s"
                data-load-indicator="<?= e(trans('backend::lang.form.saving')) ?>"
                class="btn btn-primary">
                <?= e(trans('backend::lang.form.save')) ?>
            </button>
        </div>
    </div>
    <?= Form::close() ?>
<?php else: ?>
    <div class="error-message"><?= e(trans($this->fatalError)) ?></div>
<?php endif ?>
