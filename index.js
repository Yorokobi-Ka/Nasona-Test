if(event.skill.id==glaive_id) {
			clearTimeout(isCD_glaive_timeOut)
			isCD_glaive = true
			isCD_glaive_timeOut = setTimeout(function () {
				isCD_glaive = false
			}, event.cooldown)
		}
		if(event.skill.id==charge_id) {
			clearTimeout(isCD_charge_timeOut)
			isCD_charge = true
			isCD_charge_timeOut = setTimeout(function () {
				isCD_charge = false
			}, event.cooldown)
		}		
		if(event.skill.id==maelstrom_id) {
			clearTimeout(isCD_maelstrom_timeOut)
			isCD_maelstrom = true
			isCD_maelstrom_timeOut = setTimeout(function () {
				isCD_maelstrom = false
			}, event.cooldown)
		}
		if(event.skill.id==leaping_id) {
			clearTimeout(isCD_leaping_timeOut)
			isCD_leaping = true
			isCD_leaping_timeOut = setTimeout(function () {
				isCD_leaping = false
			}, event.cooldown)
		}
		if(event.skill.id==spinning_id) {
			clearTimeout(isCD_spinning_timeOut)
			isCD_spinning = true
			isCD_spinning_timeOut = setTimeout(function () {
				isCD_spinning = false
			}, event.cooldown)
		}
		if(event.skill.id==titan_id) {
			clearTimeout(isCD_titan_timeOut)
			isCD_titan = true
			isCD_titan_timeOut = setTimeout(function () {
				isCD_titan = false
			}, event.cooldown)
		}
