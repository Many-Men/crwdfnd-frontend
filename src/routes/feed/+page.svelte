<script>
  import Post from '../../components/Post.svelte';

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
      pictures: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScn1fENC_uYvSu1-LTY_BJu2NfBh7Uz08frg&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScn1fENC_uYvSu1-LTY_BJu2NfBh7Uz08frg&s"],
    },
    {
      campaign_id: "123abc",
      title: "Save the Rainforest",
      description: "A campaign to raise funds for rainforest conservation.",
      goal: 50000.0,
      current_amount: 23000.5,
      creator: "nature_1ver89",
      like_count: 1200,
      created_at: "2024-08-05T14:30:00Z",
      pictures: [],
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
      pictures: [],
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
      pictures: [],
    },
  ];
</script>

<div class="feed">
  
  <div class="posts">
    {#each data as post}
      <Post {post} />
    {/each}
  </div>
</div>

<style>
  .feed {
  }



  .posts {
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    gap: 20px;
    margin-bottom: 20px;
  }
</style>