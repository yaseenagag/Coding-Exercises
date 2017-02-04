const formatDate = ( string ) => {
  let result = [],
    monthName = { Jan:'01', Feb:'02', Mar:'03', Apr:'04', May:'05', Jun:'06', Jul:'07', Aug:'08', Sep:'09', Oct:'10', Nov:'11', Dec:'12' },
    filtered,
    split,
    year


    if ( string.includes('-') ) {
      return filterString(string)
    }

    if ( string.includes('/') ) {
      filtered = filterString(string)
      split = splitString(filtered)
      year = '19' + split[2] + ' ' + split[0]+ ' ' + split[1]
      return filterString(year)
    }

    if ( string.includes('#') ) {
      filtered = filterString(string)
      split = splitString(filtered)
      year = '19' + split[1] + ' ' + split[0]+ ' ' + split[2]
      return filterString(year)
    }

    if ( string.includes('*') ) {
      filtered = filterString(string)
      split = splitString(filtered)
      year = split[2] + ' ' + split[1]+ ' ' + split[0]
      return filterString(year)
    }

    if ( string.length >= 10 ) {
      filtered = filterString(string)
      split = splitString(filtered)
      split[0] = monthName[split[0]]

      if ( split[2] > 49 && split[2].length === 2 ) {
        year = '19' + split[2] + ' ' + split[0]+ ' ' + split[1]
      } else if ( split[2] <= 49 && split[2].length === 2 ) {
        year = '20' + split[2] + ' ' + split[0]+ ' ' + split[1]
      } else {
        year = split[2] + ' ' + split[0]+ ' ' + split[1]
        return filterString(year)
      }
      return filterString(year)
    }

}

const filterString = ( input ) => {
  let noCommas = input.replace( "," , ""),
    noSymbols = noCommas.replace(/[#*,\s/]/gi, '-')

    return noSymbols
}

const splitString = ( date ) => {
  return date.split('-')
}

console.log(formatDate('Mar 21, 1980'))
