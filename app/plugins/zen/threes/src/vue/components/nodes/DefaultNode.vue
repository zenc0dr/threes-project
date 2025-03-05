<template>
    <div>{{ node.name || 'Node' }}</div>
</template>

<script>
export default {
    props: ['node'],
};
</script>
