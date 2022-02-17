<template>
  <main>
    <div class="container">
      <div class="post-wrapper">
        <p class="post">
          <span class="post-title">Business Analytics</span> — a new, convenient
          tool for managing and forecasting your business performance, which
          will help analyze your own finances and cash flows, visualize your
          reporting, business processes, KPI's
        </p>

        <ul class="post check-list">
          <li>
            <span class="post-title"> Interactive Reporting</span> <br />
            In just a few clicks, you can connect your data from 1C, CRM
            (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay),
            Logistic (Nova Poshta), Google Analytics and many more systems that
            reflect different aspects of business activities.
          </li>
          <li>
            <span class="post-title">Automated data updates</span> <br />
            The application automatically updates and structures the data in
            just 60 seconds, saving you time and money.
          </li>
          <li>
            <span class="post-title">Data Security</span> <br />
            The Bank guarantees the safety of your personal data, ensuring their
            integrity and confidentiality.
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
.post-wrapper {
  max-width: 60%;
}
.post {
  font-weight: 400;
  font-size: 1rem;
  line-height: 25px;
}
.post-title {
  font-weight: 500;
}
li .post-title {
  margin-bottom: 1rem;
  line-height: 25px;
}
.check-list {
  margin: 0;
  padding-left: 1.2rem;
}

.check-list li {
  position: relative;
  list-style-type: none;
  padding-left: 2rem;
  margin-bottom: 0.5rem;
}

.check-list li:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: -6px;
  width: 10px;
  height: 18px;
  border-width: 0 4px 4px 0;
  border-style: solid;
  border-color: #0076c0;
  transform-origin: bottom left;
  transform: rotate(45deg);
}

/* Boilerplate stuff */
*,
*:before,
*:after {
  box-sizing: border-box;
}
</style>
