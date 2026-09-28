function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6PGWjtvL2NS":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementByld('bgSongku');

audio.src="backsound.mp3";


audio.load();


audio.play(); 
audio.volume=0.5;
}

