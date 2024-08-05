<div class="profile-body">
  <div class="profile-main-form">
    <div class="profile-pfp"></div>
    <h1>Username</h1>
    <div class="profile-menu">
      <div class="profile-menu-item">Liked</div>
      <div class="profile-menu-item">My Campaigns</div>
    </div>
  </div>
</div>

<style lang="scss">
  .profile-body{
    background: #eee;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile-pfp{
    height: 200px;
    width: 200px;
    background: rgb(0, 123, 255);
    border-radius: 50%;
  }

  .profile-main-form{
    
    width: 400px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .profile-menu{
    padding: 5px;
    margin-top: 50px;
    width: 100%;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 0 10px #808080;
  }
</style>