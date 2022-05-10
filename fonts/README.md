# Creating subsets

This is an experiment to automate and version subsets of The Post's typefaces. You can read the current process for [creating subsets here](https://www.notion.so/wpspectrum/Fonts-cbc409d044b64c3a89738ddb02723287).

## How to update Postoni and Franklin subsets
1. Add the new character to `packages/typography/tokens.json` via the `typography.glyphs.value` value
2. If this is your first time, follow the installation instructions below
3. Run `npm run subset-fonts`. This converts the full feature otf files to compressed woff2 files with only the included glyphs.
4. In the fonts directory, the existing subset should be overwritten by a new set of fonts with the suffix `-subset`.  
5. You can test those subsets a few ways:
    - In storybook by updating the unicode range in `.storybook/preview-head.html` with the output from `npm run subset-fonts`
    - Via the `/subset` directory in s3 and import locally with Spectrum 
    - Using [this local font testing tool](https://github.com/impallari/font-testing-page).
6. When you can confirm the font is good, notify #wpds and #spectrum-devs of the incoming change. 
7. You can then copy the new subset fonts to s3 and removing the `-subset` suffix.

**Warning: The final step will update the public file across The Post. Be sure folks know of the upcoming change and you can be quick to switch back if needed.**

## Installation

We use a tool called glyphhanger that requires global dependencies. Run the following commands before running the subset-fonts script. You can read the [full instructions here](https://github.com/zachleat/glyphhanger#installation). You'll only need to do this once.

#### Install glyphhanger globally

`npm install -g glyphhanger`

#### Install fonttools

`pip install fonttools`

#### Additional installation for woff2

`git clone https://github.com/google/brotli && cd brotli && python setup.py install`

## Usage

You should now be able to run `npm run subset-fonts`. This will create a supported-characters text file from the design tokens glyphs value to pass to glyphhanger.

## Uploading to S3

You can test subsets in the [/fonts-subset](https://s3.console.aws.amazon.com/s3/buckets/wp-stat?region=us-east-1&prefix=assets/fonts-subset/) directory on s3.


When ready, you will deploy to the [/fonts](https://s3.console.aws.amazon.com/s3/buckets/wp-stat?region=us-east-1&prefix=assets/fonts/) directory on s3.
