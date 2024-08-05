<div class="profile-body">
  <div class="profile-main-form">
    <div class="profile-pfp"></div>
    <h1>Username</h1>
    <div class="profile-menu">
      <a class="profile-menu-item" href="/profile/liked">Liked</a>
      <a class="profile-menu-item" href="/profile/mycamps">My Campaigns</a>
    </div>
  </div>
</div>

<style lang="scss">
  .profile-body{
    background: #fff;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile-pfp{
    height: 200px;
    width: 200px;
    background: #4169e0;
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
    border: solid 1px #4169e0;
  }

  .profile-menu-item{
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-bottom: 5px;
    transition: .1s;
    cursor: pointer;
    text-decoration: none;
    color: #000;
  }

  .profile-menu-item:last-of-type{
    margin: 0px;
  }

  .profile-menu-item:hover{
    background: #eee;
  }
</style>