<script>
  export let post;
</script>

<div class="post">
  <h2 class="title">{post.title}</h2>
  <p class="description">{post.description}</p>
  <p class="goal"><span>Goal:</span> ${post.goal.toFixed(2)}</p>
  <p class="current"><span>Current Amount:</span> ${post.current_amount.toFixed(2)}</p>
  <p class="createdBy">creator: {post.creator}</p>
  <p class="createdAt">{new Date(post.created_at).toLocaleString()}</p>
  <button class="donate" type="button">donate</button>
</div>

<style>
  .post {
    width: 100%;
    padding: 20px;
    background-color: #f2f2f2;
    border-radius: 10px;
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