
document.addEventListener("DOMContentLoaded", () => {
    
    const headerOptions = document.querySelectorAll(".header-option");
    headerOptions.forEach(option => {
        option.addEventListener("click", () => {
            headerOptions.forEach(opt => opt.classList.remove("active"));
            option.classList.add("active");
        });
    });

   
    const statusForm = document.querySelector(".status-user form");
    const statusInput = document.querySelector(".status-user input");
    const feedContainer = document.querySelector(".feed");

    statusForm.addEventListener("submit", event => {
        event.preventDefault();
        const userStatus = statusInput.value.trim();
        if (userStatus === "") {
            alert("Please enter a status to post.");
            return;
        }

     
        const newStatus = document.createElement("div");
        newStatus.classList.add("statuses");
        newStatus.innerHTML = `
            <div class="top">
                <img class="image-avatar story-avatar" src="https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png" alt="User Avatar">
                <div class="top-info">
                    <h3>G_K_Dhass</h3>
                    <p>Just now</p>
                </div>
            </div>
            <div class="middle-text">${userStatus}</div>
            <div class="bottom">
                <div class="post-option">
                    <span class="material-symbols-outlined">thumb_up</span>
                    <p>Like</p>
                </div>
                <div class="post-option">
                    <span class="material-symbols-outlined">chat_bubble_outline</span>
                    <p>Comment</p>
                </div>
                <div class="post-option">
                    <span class="material-symbols-outlined">near_me</span>
                    <p>Share</p>
                </div>
            </div>
        `;

       
        feedContainer.prepend(newStatus);
        statusInput.value = ""; 
    });

   
    const feed = document.querySelector(".feed");
    feed.addEventListener("click", event => {
        if (event.target.closest(".post-option")) {
            const action = event.target.closest(".post-option").querySelector("p").innerText;
            alert(`You clicked ${action} on a post.`);
        }
    });
});
