let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/*
    [https:] => the letter (s) may be Exist or not.
    [\/\/] => skipping ( // ) programmatically.
    [(?:[-\w]+\.)?] => (?:[-\w]+\.) may be Exist or not, grouping one or more "-" and a word character, and "." any character else new line
    [([-\w]+)] => "-" followed by 1 word character.
    [\.\w+] => "." for any character else new line And one or more word character.
    [(?:\.\w+)?] => (?:\.\w+) may be Exist or not, (?:) Groups multiple tokens together without creating a capture group.
    [\/?.*] => (\/) skipping / character and may be Exist or not, (.*) match any character more than one or no.
    i => case insensitive.
*/