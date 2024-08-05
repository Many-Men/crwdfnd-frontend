<script>
  let data = [
    {
      campaign_id: "123abc",
      title: "Save the Rainforest",
      description: "A campaign to raise funds for rainforest conservation.",
      goal: 50000.0,
      current_amount: 23000.5,
      creator: "nature_lover89",
      like_count: 1200,
      created_at: "2024-08-05T14:30:00Z",
    },
    {
      campaign_id: "123abc",
      title: "Save the Rainforest",
      description: "A campaign to raise funds for rainforest conservation.",
      goal: 50000.0,
      current_amount: 23000.5,
      creator: "nature_lover89",
      like_count: 1200,
      created_at: "2024-08-05T14:30:00Z",
    },
    {
      campaign_id: "123abc",
      title: "Save the Rainforest",
      description: "A campaign to raise funds for rainforest conservation.",
      goal: 50000.0,
      current_amount: 23000.5,
      creator: "nature_lover89",
      like_count: 1200,
      created_at: "2024-08-05T14:30:00Z",
    },
    {
      campaign_id: "123abc",
      title: "Save the Rainforest",
      description: "A campaign to raise funds for rainforest conservation.",
      goal: 50000.0,
      current_amount: 23000.5,
      creator: "nature_lover89",
      like_count: 1200,
      created_at: "2024-08-05T14:30:00Z",
    },
    {
      campaign_id: "123abc",
      title: "Save the Rainforest",
      description: "A campaign to raise funds for rainforest conservation.",
      goal: 50000.0,
      current_amount: 23000.5,
      creator: "nature_lover89",
      like_count: 1200,
      created_at: "2024-08-05T14:30:00Z",
    },
    {
      campaign_id: "123abc",
      title: "Save the Rainforest",
      description: "A campaign to raise funds for rainforest conservation.",
      goal: 50000.0,
      current_amount: 23000.5,
      creator: "nature_lover89",
      like_count: 1200,
      created_at: "2024-08-05T14:30:00Z",
    },
  ];
</script>

<div class="liked-body">
  <div class="liked-items-wrapper">
    {#each data as item}
      <div class="liked-item">
        <div class="liked-pic"></div>
        <div class="liked-title">{item.title}</div>
        <div class="liked-desc">{item.description}</div>
        <div>Goal: ${item.current_amount}/${item.goal}</div>
      </div>
    {/each}
  </div>
</div>

<style>
  .liked-body{
    display: flex;
    justify-content: center;
  }
  .liked-items-wrapper{
    display: grid;
    grid-template-columns: 3fr 3fr 3fr;
    justify-items: center;
    width: 60%;
  }

  .liked-item{
    border-radius: 10px;
    border: solid 1px #4169e0;
    width: 300px;
    padding: 5px;
    margin-top: 10px;
    background: #fff;
  }

  .liked-pic{
    height: 160px;
    width: 100%;
    background: #4169e0;
    border-radius: 5px;
  }

  .liked-title{
    font-size: 18px;
    font-weight: 600;
  }

  .liked-desc{
    font-size: 14px;
  }
</style>
