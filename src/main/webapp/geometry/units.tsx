/**
 * Copyright (c) Codice Foundation
 *
 * This is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser
 * General Public License as published by the Free Software Foundation, either version 3 of the
 * License, or any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details. A copy of the GNU Lesser General Public License
 * is distributed along with this program and can be found at
 * <http://www.gnu.org/licenses/lgpl.html>.
 *
 **/
type LengthUnit =
  | 'meters'
  | 'kilometers'
  | 'yards'
  | 'feet'
  | 'miles'
  | 'nautical miles'
const FEET: LengthUnit = 'feet'
const KILOMETERS: LengthUnit = 'kilometers'
const METERS: LengthUnit = 'meters'
const MILES: LengthUnit = 'miles'
const NAUTICAL_MILES: LengthUnit = 'nautical miles'
const YARDS: LengthUnit = 'yards'

export { LengthUnit, FEET, KILOMETERS, METERS, MILES, NAUTICAL_MILES, YARDS }