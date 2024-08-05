<div class="reg-body">
  <form action="">
    <p class="header">You better come up with <br>cool username</p>
    <input type="text" placeholder="type here...">
    <button>Sign Up</button>
  </form>
</div>

<style>
  .reg-body{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: radial-gradient(#4169e0 1px, transparent 1px);
    background-size: 19px 19px;
    background-color: #ffffff;
  }

  .header{
    font-size: 48px;
    font-weight: 800;
    background: -webkit-linear-gradient(45deg, #4169e0, #0d40d9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }

  input{
    height: 40px;
    width: 300px;
    border-radius: 10px;
    border: 1px solid #4169e0;
    padding-left: 5px;
    font-size: 18px;
    margin-top: 40px;
  }

  button{
    height: 40px;
    width: 300px;
    border-radius: 10px;
    border: 1px solid #4169e0;
    font-size: 18px;
    margin-top: 10px;
    background: #4169e0;
    color: #fff;
    font-weight: 800;
    cursor: pointer;
  }

  form{
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 600px;
  }
</style>