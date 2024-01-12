window.onload = function() {
  async function uploadVideo() {
    const videoFile = document.getElementById('videoFile').files[0];
    if (!videoFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('video', videoFile);

    try {
      const response = await fetch('http://localhost:3000/upload-video', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Video uploaded successfully');
      } else {
        console.error('Error uploading video:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  }

  async function addSubtitles() {
    const videoId = 'video_id'; 
    const subtitleText = document.getElementById('subtitleText').value;
    const timestamp = document.getElementById('timestamp').value;

    const subtitleData = {
      videoId,
      subtitles: {
        text: subtitleText,
        timestamp: timestamp,
      },
    };

    try {
      const response = await fetch('http://localhost:3000/add-subtitles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subtitleData),
      });

      if (response.ok) {
        console.log('Subtitles added successfully');
        
      } else {
        console.error('Error adding subtitles:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding subtitles:', error);
    }
  }

 
};
