<div data-control="toolbar">
    <a
        href="<?= Backend::url('zen/threes/featurecontroller/create') ?>"
        class="btn btn-primary oc-icon-plus">
        <?= e(trans('backend::lang.form.create')) ?>
    </a>
    <button
        class="btn btn-default oc-icon-trash-o"
        data-request="onDelete"
        data-request-confirm="<?= e(trans('backend::lang.list.delete_selected_confirm')) ?>"
        data-list-checked-trigger
        data-list-checked-request
        data-stripe-load-indicator>
        <?= e(trans('backend::lang.list.delete_selected')) ?>
    </button>
    <button
        class="btn btn-default oc-icon-refresh"
        data-request="onRegenerate"
        data-request-confirm="Вы уверены, что хотите выполнить регенерацию бэклога?"
        data-stripe-load-indicator>
        Регенерировать
    </button>
    <a
        href="<?= Backend::url('zen/threes/featurecontroller/downloadxlsx') ?>"
        class="btn btn-default oc-icon-download"
        target="_blank"
    >
        Скачать XLSX
    </a>
</div>
