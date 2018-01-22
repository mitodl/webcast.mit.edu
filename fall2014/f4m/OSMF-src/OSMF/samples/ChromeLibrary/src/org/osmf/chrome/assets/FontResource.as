/*****************************************************
*  
*  Copyright 2010 Adobe Systems Incorporated.  All Rights Reserved.
*  
*****************************************************
*  The contents of this file are subject to the Mozilla Public License
*  Version 1.1 (the "License"); you may not use this file except in
*  compliance with the License. You may obtain a copy of the License at
*  http://www.mozilla.org/MPL/
*   
*  Software distributed under the License is distributed on an "AS IS"
*  basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
*  License for the specific language governing rights and limitations
*  under the License.
*   
*  
*  The Initial Developer of the Original Code is Adobe Systems Incorporated.
*  Portions created by Adobe Systems Incorporated are Copyright (C) 2010 Adobe Systems 
*  Incorporated. All Rights Reserved. 
*  
*****************************************************/

package org.osmf.chrome.assets
{
	public class FontResource extends SymbolResource
	{
		public function FontResource
							( id:String
							, url:String
							, local:Boolean
							, symbol:String
							, size:Number
							, color:uint
							)
		{
			super(id, url, local, symbol);
			
			_size = size;
			_color = color;	
		}
	
		public function get size():Number
		{
			return _size;	
		}
		
		public function get color():uint
		{
			return _color;
		}
		
		// Internals
		//
		
		private var _size:Number;
		private var _color:uint;
	}
}