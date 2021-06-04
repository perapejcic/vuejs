<template>
  <div>
    <DailyCheckingFilter />
    <table id="controls">
      <tr>
        <th>Control Name</th>
        <th>Operational database</th>
        <th>From Date</th>
        <th>To Date</th>
        <th>Control result</th>
      </tr>
      <template v-for="item in items">
      <tr :key="item.id" @click="toggle(item.id)"
        :class="{opened: opened.includes(item.id)}"
      >
        <td>{{item.control_name}}</td>
        <td>{{item.operationalDatabase}}</td>
        <td>{{item.from_date}}</td>
        <td>{{item.to_date}}</td>
        <td>{{item.control_result}}</td>
      </tr>
      <tr id="addpanel" :key="item.id" v-if="opened.includes(item.id)">
        <td colspan="1">Event Recorder:</td>
        <td>{{item.eventDatabaseQuery}}</td>
        <td colspan="1">Amadeus:</td>
        <td>{{item.operationalDatabaseQuery}}</td>
      </tr>
      </template>
    </table>
    <daily-checking-details v-if="active"></daily-checking-details>
  </div>
</template>

<script>
import DailyCheckingDetails from "./DailyCheckingDetails.vue";
import DailyCheckingFilter from "./DailyCheckingFilter.vue";

export default {
  name: "DailyCheckingTable",
  data() {
    return {
      active: false,
      opened: [],
      fields: [
        "Control Name",
        "Operational database",
        "From Date",
        "To Date",
        "Control result",
        "Details"
      ],
      items: [
        {
          id: 1,
          control_name: "Ticket control",
          operationalDatabase: "Amadeus",
          from_date: "2021-05-05",
          to_date: "2021-05-06",
          control_result: "DIFFERENT",
          eventDatabaseQuery: "select * from tickets",
          operationalDatabaseQuery: "select * from mozzart.ticket"
        },
        {
          id: 2,
          control_name: "Bonus control",
          operationalDatabase: "Golden race",
          from_date: "2021-05-05",
          to_date: "2021-05-06",
          control_result: "DIFFERENT",
          eventDatabaseQuery: "select * from bonuses",
          operationalDatabaseQuery: "select * from mozzart.bonus"
        }
      ]
    };
  },
  methods: {
    show() {
      this.active = !this.active;
    },
    toggle(id) {
      const index = this.opened.indexOf(id);
      if (index > -1) {
        this.opened.splice(index, 1);
      } else {
        this.opened.push(id);
      }
    }
  },
  components: {
    DailyCheckingDetails,
    DailyCheckingFilter
  }
};
</script>

<style>
#controls {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 76%;
  margin: auto;
  padding: 80px;
}

#controls td,
#controls th {
  padding: 8px;
}

#controls tr:nth-child(even) {
  background-color: #f2f2f2;
}

#controls tr:hover {
  background-color: #ddd;
}

#controls th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #F7B21D;
  color: #0E1C41;
}
#addpanel{
  box-sizing: content-box;
}

</style>