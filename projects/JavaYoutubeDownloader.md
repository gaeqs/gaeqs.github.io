---
title: JavaYoutubeDownloader

layout: layouts/project.njk

image: /img/javayoutubedownloader/icon.png

tech: [java, gradle]

description:  JavaYoutubeDownloader is a small and simple Youtube stream downloader that allows you to download or use any video on the platform in a few lines.

repository: https://github.com/gaeqs/JavaYoutubeDownloader

repository_type: github

date: 2000-01-30

---

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)

JavaYoutubeDownloader is a small and simple Youtube stream downloader that allows you to download or use any video on
the platform in a few lines.

### Installation

You can easily install JYD using maven:

```xml

<dependencies>
  <dependency>
    <groupId>io.github.gaeqs</groupId>
    <artifactId>JavaYoutubeDownloader</artifactId>
    <version>1.2</version>
  </dependency>
</dependencies>
```

### Usage

Using JYD is very easy! This is an example of a method that downloads a video and saves the option with the best video
quality into a file:

```java
public static boolean download(String url, File folder) {

	//Extracts and decodes all streams.
	YoutubeVideo video = JavaYoutubeDownloader.decodeOrNull(url,
	  MultipleDecoderMethod.AND, "html", "embedded");

	//Gets the option with the greatest quality that has video and audio.
	StreamOption option = video.getStreamOptions().stream()
		.filter(target -> target.getType().hasVideo() && target.getType().hasAudio())
		.min(Comparator.comparingInt(o -> o.getType().getVideoQuality().ordinal())).orElse(null);

	//If there is no option, returns false.
	if (option == null) return false;

	//Prints the option type.
	System.out.println(option.getType());

	//Creates the file. folder/title.extension
	File file = new File(folder, video.getTitle() + "."
	  + option.getType().getContainer().toString().toLowerCase());

	//Creates the downloader.
	StreamDownloader downloader = new StreamDownloader(option, file, null);

	//Runs the downloader.
	new Thread(downloader).start();
	return true;
}
```

### Demo


<div class="jyd-demo">
  <input type="text" id="demo_input" name="demo_input" value="https://www.youtube.com/watch?v=ussCHoQttyQ">
  <button id="demo_input_button" onclick="alert('Hello world!')">Run</button>
</div>

<div id="demo_output"></div>

<script src="/js/jyd_demo.js"></script>
