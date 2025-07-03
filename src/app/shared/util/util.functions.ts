import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { environment } from '../../../environments/environment';
import { ProjectInfo } from '../../models/project-info.model';

/**
 * Constructs path to image resource
 * @param view Link view of image resource
 * @param file Filename of image resource
 * @returns Path to image resource
 */
export const getImagePath = (view: string, file: string): string => `./media/images/${view}/${file}`;

/**
 * Validates whether contact reason is valid
 */
export function becauseValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value !== 'none' ? null : {because: {value: control.value}};
  };
}

/**
 * Validates whether text control is valid aka not empty
 */
export function emptyTxtValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return isBlank(control.value) ? {message: {value: 'empty'}} : null;
  };
}

function isBlank(val: any): boolean {
  if (val === null || val === undefined) return true;
  return val.toString().trim().length === 0;
}

/**
 * Validates whether policy agreement value is valid
 */
export function policyValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value === 'agree' ? null : {policy: {value: control.value}};
  };
}

export const projects: ProjectInfo[] = [
  {productName: 'Serial30', name: 'serial30', image: 'project-list-1.webp', version: '1.3.3', link: 'https://serial30.ovh/about', description: `las aplicaciones que se desarrollan en ${environment.appName.toUpperCase()} se caracterizan por ser software de calidad, contar con funcionalidades que se adapten a tus necesidades y mantener un enfoque centrado en tus dispositivos.`},
  {productName: 'DiagnoCom', name: 'diagnocom', image: 'diagnocom.webp', version: '3.1.0', link: 'https://diagnocom.serial30.ovh', description: 'diagnoCom es un sistema experto diagnosticador de enfermedades comunes en adultos. Esta aplicación te permite obtener un resultado de diagnóstico médico genérico rápido y certero.'},
  {productName: 'Himnario ASD', name: 'himnario-asd', image: 'himnario-asd.webp', version: '2.2.0', link: 'https://himnario-asd.serial30.ovh', description: 'himnario ASD es una colección de himnos, o canciones religiosas, especialmente de la Iglesia Adventista del Séptimo Día. La colección incluye 614 himnos, además de lecturas bíblicas para los servicios de adoración.'},
  {productName: 'Launcher', name: 'launcher', image: 'launcher.webp', version: '1.0.0', link: 'https://serial30.ovh/projects/launcher', description: 'launcher es una aplicación que reemplaza la interfaz predeterminada de Android. Permite cambiar el aspecto del móvil, el orden de las aplicaciones y añadir funciones adicionales.'},
  {productName: 'Biblia RV60', name: 'rv60bible', image: 'rv60bible.webp', version: '1.2.0', link: 'https://serial30.ovh/projects/rv60bible', description: 'rv60bible es una aplicación para leer la biblia en la versión Reina Valera 1960 de una manera fácil y rápida en un computadora o laptop con la opción para guardar tus versos favoritos y poder accederlos después.'},
];
