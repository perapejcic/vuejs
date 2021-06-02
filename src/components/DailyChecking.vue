<template>
  <div>
    <h1>Daily Checking</h1>
    <DailyCheckingTable />
  </div>
</template>

<script>
import DailyCheckingTable from './DailyCheckingTable.vue'

export default {
  name: "DailyChecking",
  components: { 
      DailyCheckingTable
  }
};
</script>