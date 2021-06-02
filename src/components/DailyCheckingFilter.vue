<template>
  <div id="container">
    <h1>Filter section</h1>
    <form class="form-inline">
      <span>
        <label for="market">Choose a market:</label>
        <select name="market" id="market">
          <option value="all_market">All Market</option>
          <option value="romania">Romania</option>
          <option value="malta">Malta</option>
          <option value="colombia">Colombia</option>
        </select>
        <input type="checkbox" id="differnce" name="differnce" value="differnt" />
        <label for="different">Different</label>
        <input type="checkbox" id="resolved" name="resolved" value="resolved" />
        <label for="vehicle2">Resolved</label>
        <input type="checkbox" id="matched" name="matched" value="matched" />
        <label for="vehicle3">Matched</label>
        <div style="padding-bottom: 20px">
          <span class="datepicker-toggle">
            <span class="datepicker-toggle-button"></span>
            <input type="date" class="datepicker-input" id="from" name="from-date" />
          </span>
          <span class="datepicker-toggle">
            <span class="datepicker-toggle-button"></span>
            <input type="date" class="datepicker-input" id="to" name="to-date" />
          </span>
          <input type="submit" value="Refresh" />
        </div>
      </span>
    </form>
  </div>
</template>

<script>
export default {
  name: "DailyCheckingFilter"
};
</script>

<style>
* {
  box-sizing: border-box;
}

.form-inline {
  width: 76%;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}
.form-inline label {
  margin: 5px 10px 5px 0;
}
.form-inline input {
  padding: 10px 20px;
  margin-left: 40px;
  background-color: #fdb913;
  border: 2px solid black;
  color: black;
  cursor: pointer;
}

.form-inline input:hover {
  background-color: royalblue;
}

.form-inline select {
  vertical-align: middle;
  margin: 5px 100px 5px 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
}

@media (max-width: 800px) {
  .form-inline input {
    margin: 10px 0;
  }

  .form-inline {
    flex-direction: column;
    align-items: stretch;
  }
}

</style>