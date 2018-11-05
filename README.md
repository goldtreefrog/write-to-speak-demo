<style>
	.go-top {
		box-sizing: border-box;
    position: fixed;
    bottom: 15px;
  right: 3%;
	}
</style>

# Write to Speak Demo App

A responsive website that converts typed words and phrases to speech. This text can be saved as snippets. Click any snippet to hear it spoken.

Besides the potential for speech output communication, this app encourages early literacy. Through spoken feedback and a fun way to share with friends, beginning writers are motivated to write more. (Speech output uses the [Responsive Voice](https://responsivevoice.org/) API.)

You can try out the latest version **_[here](https://boiling-gorge-25698.herokuapp.com/)_**. You will need to register, but email confirmation has not yet been included in the program, so any email address will do for now. Because it is a demo, data will be erased frequently, including any login email and words and phrases you save. (Hopefully you will not be in the middle of using it, but I make no guarantees.) Enjoy!

If you get very attached to it, [contact me](https://mendoclick.com/contact.html) and we will work on creating a more permanent solution for you.

The name of the app here on Github is "Write to Speak Demo," to distinguish it from the prior "Write to Speak" written in JQuery, which did not have a database. This latest version is a complete rewrite using React with Redux on the front end and Node.js on the back end with a MongoDB database.

---

## Table of Contents

- [Use Cases](#Use-Cases)
- [User Interface Flows](#User-Interface-Flows)
- [Wireframes](#Wireframes)
- [Working Prototype](#Working-Prototype)

## Use Cases

1.  As a beginning reader, I want help reading back what I have written.
2.  As a person with a speech challenge, I want help speaking to others in the same room.
3.  (Phase 2 - once spell check is added: As a beginning speller who often spells phonetically or inverts or leaves out letters, I want help correcting my spelling.)

## User Interface Flows

**Notes:** "Check Spelling" and "Enter as a Guest" features will be developed in Phase 2.

![UI Flow Landing and Registration Pages](github-images/user-flows-p1.jpg)
![UI Write Page](github-images/user-flows-p2.jpg)
![UI Talk and Edit Pages (for snippets)](github-images/user-flows-p3.jpg)

## Wireframes

Below are direct links to the original wireframes for each page:

- [Landing Page](https://goldtreefrog.github.io/write-to-speak-demo/wireframes/landing.html)
- [Sign-in Confirmation Page](https://goldtreefrog.github.io/write-to-speak-demo/wireframes/signed-in.html)
- [Write](https://goldtreefrog.github.io/write-to-speak-demo/wireframes/write.html) (before any text is entered)
- [Write with Spelling Suggestions](https://goldtreefrog.github.io/write-to-speak-demo/wireframes/write-with-spell-check.html) (when the user asks for a spelling check)
- [Talk](https://goldtreefrog.github.io/write-to-speak-demo/wireframes/talk.html)
- [Edit Snippets](https://goldtreefrog.github.io/write-to-speak-demo/wireframes/edit.html) (initial view)
- [Edit Snippets](https://goldtreefrog.github.io/write-to-speak-demo/wireframes/edit.html) (after user has selected snippet to edit)
- [Registration Form](https://goldtreefrog.github.io/write-to-speak-demo/wireframes/register.html)

## Working Prototype

You can access a working prototype of the app at: <https://boiling-gorge-25698.herokuapp.com/>

<a class="go-top" href="#top">**^\_Back to top\_^**</a>
