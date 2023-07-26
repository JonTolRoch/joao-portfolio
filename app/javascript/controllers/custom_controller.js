import { Controller } from "@hotwired/stimulus";
import $ from 'jquery';

export default class extends Controller {
  connect() {
    const docElement = $(document),
      headerElement = $('header'),
      wrapHeadElement = $('.wrapHead'),
      navElement = $('nav');

    docElement.on('scroll', function() {
      if (docElement.scrollTop() > 60) {
        headerElement.addClass('fixed-to-top');
        wrapHeadElement.addClass('fixed-to-top');
        navElement.addClass('fixed-to-top');
      } else {
        headerElement.removeClass('fixed-to-top');
        wrapHeadElement.removeClass('fixed-to-top');
        navElement.removeClass('fixed-to-top');
      }
    });
  }
}