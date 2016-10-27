var template = {
    "component" : component,
    "html" : html,
    "styleCommon" : styleCommon,
    "styleAndroid" : styleAndroid,
    "styleIos" : styleIos,
}

function component(name, typename) {
  return `import { Component, OnInit } from '@angular/core';

@Component({
    selector: "app-${name}",
    templateUrl: "pages/${name}/${name}.html",
    styleUrls: ["pages/${name}/${name}-common.css", "pages/${name}/${name}.css"],
})

export class ${typename} implements OnInit {

  constructor() { }

  ngOnInit() {
      
  }

}`
}

function html(name, typename) {
    return "";
}

function styleCommon(name, typename) {
    return "";
}

function styleAndroid(name, typename) {
    return "";
}

function styleIos(name, typename) {
    return "";
}

exports.template = template;