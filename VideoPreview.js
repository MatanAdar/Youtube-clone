
const temple = document.createElement('template');
temple.innerHTML = `
    <div class="video-preview">
            <div class="thumbnail-row">
                 <img class="video-image" src=thumbnails/`&{}`>
            </div>
            <div>
                <div class="channel-picture">
                    <img class="profile-picture" src="channel-pictures/channel-2.jpeg">
                </div>
                <div class="video-info">
                    <p class="video-title">
                        Try Not To Laugh Challenge #9
                    </p>
                    <p class="video-author">
                        Markiplier
                    </p>
                    <p class="video-stats">
                        19M views  &#183; 4 years ago
                    </p>
                </div>
            </div>
        </div>
`