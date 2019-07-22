<template>
  <div id="wrapper">
    <div>第三包地址-->{{resourcesPATH}}</div>
    <div>数据库地址-->{{ADODBPATH}}</div>
    <div>数据库数据-->{{data.OBJECTID}}---{{data.name}}---{{data.id}}---{{data.index}}</div>
  </div>
</template>

<script>
export default {
  name: "landing-page",
  components: {},
  data() {
    return {
      connection: "",
      data: "",
      resourcesPATH: "", // 第三方包地址
      ADODBPATH: "" // 数据库模块地址
    };
  },
  created() {
    let _slf = this;
    this.connection = this.$ADODB.open(
      `Provider=Microsoft.Jet.OLEDB.4.0;Data Source=${this.$path.join(
        this.$static,
        "/dat.mdb"
      )};`
    );
    this.connection
      .query(`SELECT * FROM device_info`)
      .then(data => {
        _slf.data = data[0];
        console.log(_slf.data);
      })
      .catch(error => {
        console.log(error);
      });
    this.resourcesPATH = this.$static;
    this.ADODBPATH = this.$ADODB.PATH;
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
}

#wrapper {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  height: 100vh;
  padding: 60px 80px;
  width: 100vw;
}

#logo {
  height: auto;
  margin-bottom: 20px;
  width: 420px;
}

main {
  display: flex;
  justify-content: space-between;
}

main > div {
  flex-basis: 50%;
}

.left-side {
  display: flex;
  flex-direction: column;
}

.welcome {
  color: #555;
  font-size: 23px;
  margin-bottom: 10px;
}

.title {
  color: #2c3e50;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 6px;
}

.title.alt {
  font-size: 18px;
  margin-bottom: 10px;
}

.doc p {
  color: black;
  margin-bottom: 10px;
}

.doc button {
  font-size: 0.8em;
  cursor: pointer;
  outline: none;
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
}

.doc button.alt {
  color: #42b983;
  background-color: transparent;
}
</style>
