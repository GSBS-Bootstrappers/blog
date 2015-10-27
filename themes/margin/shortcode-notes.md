+++

title = "How to write a boostrappers blog post"
subtitle = "this is a subtitle to a super awesome post"

date = ""
date-updated =""

author = "crmackay"

categories = "meta"

summary = "this is both a sample document and a set of instructions on how to format and wrote a bootstrappers blog post"


+++

## Getting Started

### An introduction to markdown

Boostrappers blog posts are written in **markdown** which is considered a type of *mark-up* language. What this means is that **markdown** is a why or adding symbols and flags to plain text, that are later processed by a computer program to create a final output.

**Markdown** is unique in that it's version of *markup* is easy to read, understand, and type in plain text.

Here is an example. While writing a blog post in our favorite text editor (NOT word processor), we may find a word that we need to italiszie. If the word is "very", we would write in our text editor `*very*`. Surrounding the word in a single astericks marks the work for italicization. However, the emphasis added by italics is also preserved in the plain text as well:

```
this is not a *very* important point

```

With markdown you can get more than just italics however:

**bolding** is possible with two astericks: `**bolding**`

You can create headers with hashtags:

# First order header: `# First order header:`

etc. etc.

you can view the markdown "specification" [here]()



### Getting this sample file


## Adding Rich Content

### Figures

In markdown you can easily add an image by using the `![text](this/is/the-path-to/the-image.jpg)` syntax. 

However, here at the boostrappers site, we have three different types of figures, and as a result there is a bit more you must include to include a nice looking figure:

#### full-width figures

Figures that take up the entire column of text, with they're caption in the margin are very common.

To add such a figure include a `figure` element with the necessary information:

```
{{% figure type="full-width", title="This is a figure title", src="figure1.svg" /%}}
```

The above code will result in a figure like this:

{{% figure type="full-width", title="This is a figure title", src="figure1.svg" /%}}

## page-width figures

Occiasionally your figure is large enought that it warrants spanning the entire width of the main text column and the margin column. To achieve this simply change the `type=""` designation to `type="page-width"` like so:

```
{{% figure type="full-width", title="This is a figure title", src="figure1.svg" /%}}
```

which results in:

{{% figure type="full-width", title="This is a figure title", src="figure1.svg" /%}}

### margin figures

Putting figures in the margin is common practice is a good idea for figures that are small enough.

To accomplish this again, just add the correct `type` decleration to the figure element, like so:

```
{{% figure type="margin", title="This is a figure title", src="figure1.svg" /%}}
```

which results in a figure thin the margin (note: on mobile margin figures are hidden and replaced with a (&#8853;) symbol. Clicking this symbol reveals the figure and it's caption.

{{% figure type="margin", title="This is a figure title", src="figure1.svg" /%}}


You are able to add margin notes to your posts

{{% marginnote %}}
	This is an example of how you can put margin notes right in a paragraph by using a *shortcode*.
{{% /marginnote %}}

{{% sidenote %}}
	Your side note would goes *here*.
{{% /sidenote %}}

{{% figure type="page-width|full-width|margin", title="This is a figure title", src="figure1.svg" /%}}

	Figure caption goes here. 

{{% /figure %}}

{{< math >}}

	$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$ 

{{< /math >}}
