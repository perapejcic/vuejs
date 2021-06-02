<template>
  <div>
    <DailyCheckingFilter />
    <table id="controls">
      <tr>
        <th>Market</th>
        <th>Control Name</th>
        <th>Matching Status</th>
        <th>From Date</th>
        <th>To Date</th>
        <th>Difference</th>
      </tr>
      <template v-for="item in items">
      <tr :key="item.id" @click="toggle(item.id)"
        :class="{opened: opened.includes(item.id)}"
      >
        <td>{{item.market}}</td>
        <td>{{item.control_name}}</td>
        <td>{{item.matching_status}}</td>
        <td>{{item.from_date}}</td>
        <td>{{item.to_date}}</td>
        <td>{{item.diference}}</td>
      </tr>
      <tr :key="item.id" v-if="opened.includes(item.id)">
        <td colspan="2">Event Recorder:</td><td><strong>{{item.sql_query_1}}</strong></td>
        <td colspan="2">Amadeus:</td><td><strong>{{item.sql_query_2}}</strong></td>
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
        "Market",
        "Control Name",
        "Matching Status",
        "From Date",
        "To Date",
        "Difference",
        "Details"
      ],
      items: [
        {
          id: 1,
          market: "Roamnia",
          control_name: "tickets",
          matching_status: "diff",
          from_date: "2021-05-05",
          to_date: "2021-05-06",
          diference: "25",
          sql_query_1: "select * from tickets",
          sql_query_2: "select * from mozzart.ticket"
        },
        {
          id: 2,
          market: "Roamnia",
          control_name: "bonuses",
          matching_status: "diff",
          from_date: "2021-05-05",
          to_date: "2021-05-06",
          diference: "25",
          sql_query_1: "select * from bonuses",
          sql_query_2: "select * from mozzart.bonus"
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
  background-color: #fdb913;
  color: black;
}

</style>