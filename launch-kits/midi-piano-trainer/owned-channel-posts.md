# Owned-Channel Posts

## Blog Intro

Title: Free MIDI Piano Trainer Online

Body:

I am building Open Free Tools, a collection of free open-source browser tools. The first tool is MIDI Piano Trainer: upload a `.mid` file, see falling notes, listen to the piano playback, choose tracks, and practice directly in the browser.

There is also an experimental Audio-to-MIDI beta. It works best with short clean piano recordings and can be wrong on noisy audio, but it already supports the full workflow: upload audio, create MIDI, download it, or open it in the trainer.

Try it:

https://john1912-7.github.io/midi-piano-trainer/en/?utm_source=blog&utm_medium=owned&utm_campaign=midi_first_users&utm_content=guide

## GitHub Release Draft

Title: First public Audio-to-MIDI beta workflow

Body:

This release focuses on making the first user workflow understandable:

- official backend is selected automatically;
- users do not need to choose a backend;
- queue/progress states are visible;
- generated MIDI can be downloaded or opened in MIDI Piano Trainer;
- feedback route is available for bad conversions.

Known limitation: Audio-to-MIDI is still experimental. Clean short piano recordings work best.

Try the beta:

https://john1912-7.github.io/midi-piano-trainer/en/audio-to-midi/?utm_source=github&utm_medium=owned&utm_campaign=midi_first_users&utm_content=release

Report bad conversions:

https://github.com/John1912-7/midi-piano-trainer/issues/new?template=audio-conversion-feedback.yml

## Discord Owned Server Post

I am testing the first Open Free Tools music workflow:

1. upload a MIDI file and practice with falling notes;
2. or upload a short piano recording;
3. convert it to MIDI;
4. open the result in the trainer.

The Audio-to-MIDI part is still beta and can make wrong notes, especially with noisy/full-song audio. Clean short piano works best.

Try it:

https://john1912-7.github.io/midi-piano-trainer/en/audio-to-midi/?utm_source=discord&utm_medium=owned&utm_campaign=midi_first_users&utm_content=feedback

If it gives a bad result, please report the file type and what went wrong:

https://github.com/John1912-7/midi-piano-trainer/issues/new?template=audio-conversion-feedback.yml

## RSS/Changelog Entry

Title: MIDI Piano Trainer adds a clearer Audio-to-MIDI beta workflow

Summary:

Open Free Tools now has a clearer first music workflow: upload audio, create MIDI, download the file, or open it in MIDI Piano Trainer. The converter remains experimental, but the page now explains limits and uses the official backend automatically.
