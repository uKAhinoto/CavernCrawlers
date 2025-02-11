// Copyright 2025 Cavern Crawlers. All rights reserved.

/* Project - Cavern Crawlers
 * Branch - Slug Roller
 * Filename - js/template_loader.js
 * Author - uKAhinoto
 * Last Modified - 02/10/25
 */

// debug thing
const region = "Magma";


function LoadRegion(/*region*/) {
  // Read the json file
  let bg = "background: black url(../sitestyle/" + region + ".jpg) no-repeat fixed;";
  document.body.style.property = new bg;
}