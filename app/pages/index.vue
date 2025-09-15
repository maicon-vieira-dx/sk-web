<template>
    <div>
        <p v-if="pending">Loading...</p>
        <p v-else-if="error">Error: {{ error.message }}</p>
        <p v-else>{{ data }}</p>
    </div>
</template>

<script setup>
const { data, pending, error } = await useFetch('/api/v1/login');
</script>