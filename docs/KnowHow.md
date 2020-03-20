# Hexo Tutorial 

## #3/20 - new site
- scaffolds - content templates
- source - where you write blog posts 
    _draft and other folders to follow the process
    _posts - real time posts 
- themes
    landscape - default 
- _config.yml
    - controls all things on web site.

## #4 - Creating content
- if no layout provided it should take `default_layout` from _config.yml
```$ hexo new post-name```

!!! if it does not work you are in wrong FOLDER
```$ hexo new draft ekonomija```
```$ hexo server --draft``` to show all draft posts 

to publish post ```$ hexo publish ekonomija```

## #5 - Front Matter
Basically header of page or metadata - can be in Json or in yaml 

tags: in square brackets with coma [tag1, tag2]

## #6 - Scaffolds 

It is possible to change content, and also to add new scaffolds 
to run them for instance 

```$ hexo new history xxx```

## #7 - Tags & Categories
- tags covered
```
---
categories:
- [Cat1, Cat1.1]
- [Nauka, Rudarstvo, Geologija]
- [Cat3]
- [Cat3, a]
- [Cat3, b]
---
```

### 404 error page 
- in source/404.md created no comment and it is page layout
- will be seen probably when content is generated

## #8 - [Tag Plugins](https://hexo.io/docs/tag-plugins)

```
{% codeblock [JavaScript Variable] [lang:javascript] %}
let a = { num: 2};
let b = 2;
Object.freeze(a);
{% endcodeblock %}

{% youtube I07XMi7MHd4 %}
```

## #9 - Asset Folders
To create asset folder of posts, (iamges, video, music, json, excel, pdf ...)

set ```post_asset_folder: true``` default is false.
now ```hexo new post bbb``` will create bbb.md file but also bbb folder

{% asset_img txt shark-giraffe.jpg `"Shark Giraffe" "xxx"` 200px 333px %}

No option for resize so Html tag:
<img src="/articles/bbb/shark-giraffe.jpg" width="200" height="250" alt="xxx" title="Ih kako"##

## #10 - Installing a Theme
just got to themes can clone git into the theme folder 
adjust according specif github instructions 

## #11 - Creating a Theme
language 
layout 
theme 
source
config.yml

## #12 - Creating a Theme - Layouts

