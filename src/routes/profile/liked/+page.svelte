<script>
  import Post from "../../../components/Post.svelte";
  const data = [
    {
      campaign_id: "123abc",
      title: "Save the Rainforest",
      description: "A campaign to raise funds for rainforest conservation.",
      goal: 50000.0,
      current_amount: 23000.5,
      creator: "nature_lover89",
      like_count: 1200,
      created_at: "2024-08-05T14:30:00Z",
      pictures: ["dasdasd.png", "image.png"],
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
      pictures: ["dasdasd.png", "image.png"],
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
      pictures: ["dasdasd.png", "image.png"],
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
      pictures: ["dasdasd.png", "image.png"],
    },
  ];
</script>

<div class="liked-body">
  <div class="liked-items-wrapper">
    {#each data as post}
      <Post {post} />
    {/each}
  </div>
</div>

<style>
  .liked-body{
    /* display: flex;
    justify-content: center; */
  }

  .liked-items-wrapper{
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    gap: 20px;
  }

</style>
