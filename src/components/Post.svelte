<script>
  export let post;
</script>

<div class="post">
  <div class="inner">
    <h2 class="title">{post.title}</h2>
    {#if Array.isArray(post.pictures) && post.pictures.length > 0}
      <div class="pictures">
        {#each post.pictures as pic}
          <img draggable="false" src={pic} alt="" />
        {/each}
      </div>
    {/if}
    <p class="description">{post.description}</p>
    <p class="goal"><span>Goal:</span> ${post.goal.toFixed(2)}</p>
    <p class="current">
      <span>Current Amount:</span> ${post.current_amount.toFixed(2)}
    </p>
    <p class="createdBy">creator: {post.creator}</p>
    <p class="createdAt">{new Date(post.created_at).toLocaleString()}</p>
    <button class="donate" type="button">donate</button>
  </div>
</div>

<style>
  .post {
    width: 100%;
    background-color: #f2f2f2;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
  }

  .pictures {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin-bottom: 10px;
  }

  .pictures img {
    border: 1px solid #507fff;
    border-radius: 6px;
    max-height: 100px;
  }

  .inner {
    width: 100%;
    padding: 20px;
    position: relative;
  }

  .title {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 600;
    max-width: 600px;
  }

  .description {
    font-size: 16px;
    margin-bottom: 30px;
    font-weight: 500;
    max-width: 500px;
  }

  .createdAt {
    position: absolute;
    top: 20px;
    right: 20px;
    color: gray;
    font-size: 14px;
    font-weight: 500;
  }

  .createdBy {
    position: absolute;
    top: 40px;
    right: 20px;
    color: gray;
    font-size: 14px;
    font-weight: 500;
  }

  .goal {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 500;
    max-width: 500px;
    color: gray;
  }

  .goal span {
    font-weight: 600;
    color: black;
  }

  .current {
    font-size: 16px;
    font-weight: 500;
    max-width: 500px;
    color: gray;
  }

  .current span {
    font-weight: 600;
    color: black;
  }

  .donate {
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 24px;
    background-color: #507fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 200ms;
    will-change: transform;

    &:hover {
      transform: scale(1.05);
    }
  }
</style>
