const videos = [
    {
        thumbnail: "thumbnails/thumbnail-1.webp",
        time: "14:20",
        channelPicture: "channel-pictures/channel-1.jpeg",
        title: "Talking Tech and AI with Google CEO Sundar Pichai!",
        author: "Marques Brownlee",
        views: "3.4M views",
        uploaded: "6 months ago"
    },
    {
        thumbnail: "thumbnails/thumbnail-2.webp",
        time: "8:22",
        channelPicture: "channel-pictures/channel-2.jpeg",
        title: "Try Not To Laugh Challenge #9",
        author: "Markiplier",
        views: "19M views",
        uploaded: "4 years ago"
    },
    {
        thumbnail: "thumbnails/thumbnail-3.webp",
        time: "9:13",
        channelPicture: "channel-pictures/channel-3.jpeg",
        title: "Crazy Tik Toks Taken Moments Before DISASTER",
        author: "SSSniperWolf",
        views: "12M views",
        uploaded: "1 year ago"
    },
    {
        thumbnail: "thumbnails/thumbnail-4.webp",
        time: "22:09",
        channelPicture: "channel-pictures/channel-4.jpeg",
        title: "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
        author: "Veritasium",
        views: "18M views",
        uploaded: "4 months ago"
    },
    {
        thumbnail: "thumbnails/thumbnail-5.webp",
        time: "11:17",
        channelPicture: "channel-pictures/channel-5.jpeg",
        title: "Kadane's Algorithm to Maximum Sum Subarray Problem",
        author: "CS Dojo",
        views: "519K views",
        uploaded: "5 years ago"
    },
    {
        thumbnail: "thumbnails/thumbnail-6.webp",
        time: "19:59",
        channelPicture: "channel-pictures/channel-6.jpeg",
        title: "Anything You Can Fit In The Circle I’ll Pay For",
        author: "MrBeast",
        views: "141M views",
        uploaded: "1 year ago"
    },
    {
        thumbnail: "thumbnails/thumbnail-7.webp",
        time: "10:13",
        channelPicture: "channel-pictures/channel-7.jpeg",
        title: "Why Planes Don't Fly Over Tibet",
        author: "RealLifeLore",
        views: "6.6M views",
        uploaded: "1 year ago"
    },
    {
        thumbnail: "thumbnails/thumbnail-8.webp",
        time: "7:12",
        channelPicture: "channel-pictures/channel-8.jpeg",
        title: "Inside The World's Biggest Passenger Plane",
        author: "Tech Vision",
        views: "3.7M views",
        uploaded: "10 months ago"
    },
    {
        thumbnail: "thumbnails/thumbnail-9.webp",
        time: "13:17",
        channelPicture: "channel-pictures/channel-9.jpeg",
        title: "The SECRET to Super Human STRENGTH",
        author: "ThenX",
        views: "20M views",
        uploaded: "3 year ago"
    },
    {
        thumbnail: "thumbnails/thumbnail-10.webp",
        time: "7:53",
        channelPicture: "channel-pictures/channel-10.jpeg",
        title: "How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
        author: "Business Insider",
        views: "14M views",
        uploaded: "1 year ago"
    },
    {
        thumbnail: "thumbnails/thumbnail-11.webp",
        time: "4:10",
        channelPicture: "channel-pictures/channel-11.jpeg",
        title: "Dubai's Crazy Underwater Train and Other Things #Only in Dubai",
        author: "Destination Tips",
        views: "3M views",
        uploaded: "1 year ago"
    },
    {
        thumbnail: "thumbnails/thumbnail-12.webp",
        time: "4:51",
        channelPicture: "channel-pictures/channel-12.jpeg",
        title: "What would happen if you didn’t drink water? - Mia Nacamulli",
        author: "TED-Ed",
        views: "12M views",
        uploaded: "5 years ago"
    },
    
    
];

function generateVideoPreviews(videos) {
    const container = document.getElementById('video-container');
    const template = document.getElementById('video-template').content;

    videos.forEach(video => {
        const videoElement = template.cloneNode(true);

        videoElement.querySelector('.thumbnail-image').src = video.thumbnail;
        videoElement.querySelector('.video-time').textContent = video.time;
        videoElement.querySelector('.channel-picture').src = video.channelPicture;
        videoElement.querySelector('.video-title').textContent = video.title;
        videoElement.querySelector('.video-author').textContent = video.author;
        videoElement.querySelector('.video-stats').textContent = `${video.views} · ${video.uploaded}`;

        container.appendChild(videoElement);
    });
}

generateVideoPreviews(videos);
