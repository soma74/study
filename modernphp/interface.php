<?php
	error_reporting(E_ALL);

	interface Documentable
	{
		public function getId();
		
		public function getContent();
	}

	
	/**
	 * Short description.
	 * @package     main
	 * @subpackage  classes
	 * @abstract    Classes defined as abstract may not be instantiated
	 */
	class DocumentStore
	{
		protected $data = [];

		public function addDocument(Documentable $document)
		{
			$key = $document->getId();
			$value = $document->getContent();
			$this->data[$key] = $value;
		}

		public function getDocuments()
		{
			return $this->data;
		}
	} // end class


	/**
	 * Short description.
	 * @package     main
	 * @subpackage  classes
	 * @abstract    Classes defined as abstract may not be instantiated
	 */
	class HtmlDocument implements Documentable
	{
		protected $url;

		public function __construct($url)
		{
			$this->url = $url;
		}
		
		
		/**
		 * Short description.
		 * @param   type    $varname    description
		 * @return  type    description
		 * @access  public or private
		 * @static  makes the class property accessible without needing an instantiation of the class
		 */
		public function getId()
		{
			return $this->url;
		} // end func

		
		/**
		 * Short description.
		 * @param   type    $varname    description
		 * @return  type    description
		 * @access  public or private
		 * @static  makes the class property accessible without needing an instantiation of the class
		 */
		public function getContent()
		{
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $this->url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 3);
			curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
			curl_setopt($ch, CURLOPT_MAXREDIRS, 3);
			$html = curl_exec($ch);

			return $html;
		} // end func
	} // end class

	
	
	/**
	 * Short description.
	 * @package     main
	 * @subpackage  classes
	 * @abstract    Classes defined as abstract may not be instantiated
	 */
	class StreamDocument implements Documentable
	{
		protected $resource;
		protected $buffer;

		
		/**
		 * Short description.
		 * @param   type    $varname    description
		 * @return  type    description
		 * @access  public or private
		 * @static  makes the class property accessible without needing an instantiation of the class
		 */
		public function __construct($resource, $buffer=4096)
		{
			$this->resource = $resource;
			$this->buffer = $buffer;
		} // end func

		
		/**
		 * Short description.
		 * @param   type    $varname    description
		 * @return  type    description
		 * @access  public or private
		 * @static  makes the class property accessible without needing an instantiation of the class
		 */
		public function getId()
		{
			return 'resource-' . (int)$this->resource;
		} // end func

		
		/**
		 * Short description.
		 * @param   type    $varname    description
		 * @return  type    description
		 * @access  public or private
		 * @static  makes the class property accessible without needing an instantiation of the class
		 */
		public function getContent()
		{
			$streamContent = '';
			rewind($this->resource);
			while(feof($this->resource) === false)
			{
				$streamContent .= fread($this->resource, $this->buffer);
			}

			return $streamContent;
		} // end func
	} // end class

	
	/**
	 * Short description.
	 * @package     main
	 * @subpackage  classes
	 * @abstract    Classes defined as abstract may not be instantiated
	 */
	class CommandOutputDocument implements Documentable
	{
		protected $command;

		
		/**
		 * Short description.
		 * @param   type    $varname    description
		 * @return  type    description
		 * @access  public or private
		 * @static  makes the class property accessible without needing an instantiation of the class
		 */
		public function __construct($command)
		{
			$this->command = $command;
		} // end func

		
		/**
		 * Short description.
		 * @param   type    $varname    description
		 * @return  type    description
		 * @access  public or private
		 * @static  makes the class property accessible without needing an instantiation of the class
		 */
		public function getId()
		{
			return $this->command;
		} // end func

		
		/**
		 * Short description.
		 * @param   type    $varname    description
		 * @return  type    description
		 * @access  public or private
		 * @static  makes the class property accessible without needing an instantiation of the class
		 */
		public function getContent()
		{
			return shell_exec($this->command);
		} // end func
	} // end class

	$documentStore = new DocumentStore();

	$htmlDoc = new HtmlDocument("https//php.net");
	$documentStore->addDocument($htmlDoc);

	$streamDoc = new StreamDocument(fopen('license.txt', 'rb'));
	$documentStore->addDocument($streamDoc);
//
//	$cmdDoc = new CommandOutputDocument("cat /etc/hosts");
//	$documentStore->addDocument($cmdDoc);

	echo "<pre>";print_r($documentStore->getDocuments());echo "</pre>";
?>