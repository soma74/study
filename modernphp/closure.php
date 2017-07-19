<?php 
	function enclosePerson($name, $with)
	{
		return function ($doCommand) use ($name, $with)
		{
			return sprintf("%s, %s, %s", $name, $doCommand, $with);
		};
	}

	$clay = enclosePerson('Clay', 'sso');

	echo $clay('차 한 잔 부탁해요!');