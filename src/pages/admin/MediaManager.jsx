import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FiUpload,
  FiImage,
  FiFile,
  FiVideo,
  FiMusic,
  FiTrash2,
  FiDownload,
  FiCopy,
  FiSearch,
  FiFilter,
  FiGrid,
  FiList,
  FiFolder,
  FiPlus,
  FiX,
  FiEye,
  FiEdit3,
  FiMoreVertical
} from 'react-icons/fi';

const MediaManager = () => {
  const [files, setFiles] = useState([]);
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [folders, setFolders] = useState([]);
  const [currentFolder, setCurrentFolder] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [fileTypeFilter, setFileTypeFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [showNewFolder, setShowNewFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [previewFile, setPreviewFile] = useState(null);
  const fileInputRef = useRef(null);

  // Mock data
  const mockFolders = [
    { id: 1, name: 'Images', count: 24, createdAt: '2024-01-15' },
    { id: 2, name: 'Documents', count: 12, createdAt: '2024-01-10' },
    { id: 3, name: 'Videos', count: 8, createdAt: '2024-01-08' },
    { id: 4, name: 'Audio', count: 5, createdAt: '2024-01-05' }
  ];

  const mockFiles = [
    {
      id: 1,
      name: 'hero-background.jpg',
      type: 'image',
      size: '2.4 MB',
      url: '/assets/hero-background.jpg',
      folder: 'Images',
      folderId: 1,
      uploadedAt: '2024-01-15',
      dimensions: '1920x1080'
    },
    {
      id: 2,
      name: 'project-showcase.png',
      type: 'image',
      size: '1.8 MB',
      url: '/assets/project-showcase.png',
      folder: 'Images',
      folderId: 1,
      uploadedAt: '2024-01-14',
      dimensions: '1600x900'
    },
    {
      id: 3,
      name: 'resume.pdf',
      type: 'document',
      size: '245 KB',
      url: '/assets/resume.pdf',
      folder: 'Documents',
      folderId: 2,
      uploadedAt: '2024-01-12'
    },
    {
      id: 4,
      name: 'demo-video.mp4',
      type: 'video',
      size: '15.2 MB',
      url: '/assets/demo-video.mp4',
      folder: 'Videos',
      folderId: 3,
      uploadedAt: '2024-01-10',
      duration: '2:34'
    },
    {
      id: 5,
      name: 'background-music.mp3',
      type: 'audio',
      size: '4.1 MB',
      url: '/assets/background-music.mp3',
      folder: 'Audio',
      folderId: 4,
      uploadedAt: '2024-01-08',
      duration: '3:45'
    },
    {
      id: 6,
      name: 'logo-design.svg',
      type: 'image',
      size: '45 KB',
      url: '/assets/logo-design.svg',
      folder: 'Images',
      folderId: 1,
      uploadedAt: '2024-01-07'
    }
  ];

  useEffect(() => {
    setFolders(mockFolders);
    setFiles(mockFiles);
    setFilteredFiles(mockFiles);
  }, []);

  useEffect(() => {
    filterFiles();
  }, [searchTerm, fileTypeFilter, currentFolder, files]);

  const filterFiles = () => {
    let filtered = files;

    // Filter by current folder
    if (currentFolder) {
      filtered = filtered.filter(file => file.folderId === currentFolder.id);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(file =>
        file.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by file type
    if (fileTypeFilter !== 'all') {
      filtered = filtered.filter(file => file.type === fileTypeFilter);
    }

    setFilteredFiles(filtered);
  };

  const handleFileUpload = async (uploadFiles) => {
    setUploading(true);
    try {
      // Mock file upload - replace with actual API call
      const newFiles = Array.from(uploadFiles).map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
        type: getFileType(file.type),
        size: formatFileSize(file.size),
        url: URL.createObjectURL(file),
        folder: currentFolder?.name || 'Root',
        folderId: currentFolder?.id || null,
        uploadedAt: new Date().toISOString().split('T')[0]
      }));

      setFiles(prev => [...prev, ...newFiles]);
      
      // Update folder count
      if (currentFolder) {
        setFolders(prev => prev.map(folder =>
          folder.id === currentFolder.id
            ? { ...folder, count: folder.count + newFiles.length }
            : folder
        ));
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      handleFileUpload(droppedFiles);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const getFileType = (mimeType) => {
    if (mimeType.startsWith('image/')) return 'image';
    if (mimeType.startsWith('video/')) return 'video';
    if (mimeType.startsWith('audio/')) return 'audio';
    return 'document';
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type) => {
    switch (type) {
      case 'image': return FiImage;
      case 'video': return FiVideo;
      case 'audio': return FiMusic;
      default: return FiFile;
    }
  };

  const handleFileSelect = (file) => {
    setSelectedFiles(prev => {
      const isSelected = prev.some(f => f.id === file.id);
      if (isSelected) {
        return prev.filter(f => f.id !== file.id);
      } else {
        return [...prev, file];
      }
    });
  };

  const handleDeleteFiles = async () => {
    if (window.confirm(`Are you sure you want to delete ${selectedFiles.length} file(s)?`)) {
      try {
        const fileIds = selectedFiles.map(f => f.id);
        setFiles(prev => prev.filter(file => !fileIds.includes(file.id)));
        setSelectedFiles([]);
      } catch (error) {
        console.error('Error deleting files:', error);
      }
    }
  };

  const handleCopyUrl = (url) => {
    navigator.clipboard.writeText(url);
    // Show toast notification in real implementation
  };

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      const newFolder = {
        id: Date.now(),
        name: newFolderName.trim(),
        count: 0,
        createdAt: new Date().toISOString().split('T')[0]
      };
      setFolders([...folders, newFolder]);
      setNewFolderName('');
      setShowNewFolder(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 pt-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Media Manager
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Upload, organize, and manage your media files
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <button
              onClick={() => setShowNewFolder(true)}
              className="inline-flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <FiFolder className="w-4 h-4 mr-2" />
              New Folder
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-200"
            >
              <FiUpload className="w-5 h-5 mr-2" />
              Upload Files
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              onChange={(e) => handleFileUpload(e.target.files)}
              className="hidden"
            />
          </div>
        </motion.div>

        {/* Breadcrumb */}
        {currentFolder && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-2 mb-6"
          >
            <button
              onClick={() => setCurrentFolder(null)}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300"
            >
              All Files
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 dark:text-white font-medium">
              {currentFolder.name}
            </span>
          </motion.div>
        )}

        {/* Folders */}
        {!currentFolder && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Folders
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {folders.map((folder) => (
                <motion.button
                  key={folder.id}
                  onClick={() => setCurrentFolder(folder)}
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiFolder className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                    {folder.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {folder.count} files
                  </p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search files..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* File Type Filter */}
              <select
                value={fileTypeFilter}
                onChange={(e) => setFileTypeFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="image">Images</option>
                <option value="video">Videos</option>
                <option value="audio">Audio</option>
                <option value="document">Documents</option>
              </select>
            </div>

            <div className="flex items-center space-x-4">
              {/* Selected Files Actions */}
              {selectedFiles.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {selectedFiles.length} selected
                  </span>
                  <button
                    onClick={handleDeleteFiles}
                    className="p-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* View Mode */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
                >
                  <FiGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
                >
                  <FiList className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upload Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`border-2 border-dashed rounded-xl p-8 mb-8 transition-colors duration-200 ${
            dragOver
              ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
              : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <div className="text-center">
            <FiUpload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Drop files here to upload
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              or click to browse files
            </p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-200"
            >
              Choose Files
            </button>
          </div>
        </motion.div>

        {/* Files Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredFiles.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center border border-gray-200 dark:border-gray-700">
              <FiFile className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">No files found.</p>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {filteredFiles.map((file) => {
                const IconComponent = getFileIcon(file.type);
                const isSelected = selectedFiles.some(f => f.id === file.id);
                
                return (
                  <motion.div
                    key={file.id}
                    className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                    onClick={() => handleFileSelect(file)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
                      {file.type === 'image' ? (
                        <img
                          src={file.url}
                          alt={file.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <IconComponent className="w-8 h-8 text-gray-500" />
                      )}
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white text-sm truncate">
                      {file.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {file.size}
                    </p>
                    
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-400">
                        {file.uploadedAt}
                      </span>
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setPreviewFile(file);
                          }}
                          className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          <FiEye className="w-3 h-3" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopyUrl(file.url);
                          }}
                          className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          <FiCopy className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Size
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Uploaded
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {filteredFiles.map((file) => {
                      const IconComponent = getFileIcon(file.type);
                      const isSelected = selectedFiles.some(f => f.id === file.id);
                      
                      return (
                        <tr
                          key={file.id}
                          className={`hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
                            isSelected ? 'bg-primary-50 dark:bg-primary-900/20' : ''
                          }`}
                          onClick={() => handleFileSelect(file)}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <IconComponent className="w-5 h-5 text-gray-500 mr-3" />
                              <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {file.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 capitalize">
                            {file.type}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                            {file.size}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                            {file.uploadedAt}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end space-x-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setPreviewFile(file);
                                }}
                                className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300"
                              >
                                <FiEye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopyUrl(file.url);
                                }}
                                className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                              >
                                <FiCopy className="w-4 h-4" />
                              </button>
                              <a
                                href={file.url}
                                download={file.name}
                                onClick={(e) => e.stopPropagation()}
                                className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
                              >
                                <FiDownload className="w-4 h-4" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </motion.div>

        {/* New Folder Modal */}
        {showNewFolder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md mx-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Create New Folder
              </h3>
              <input
                type="text"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                placeholder="Folder name..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-4"
                onKeyPress={(e) => e.key === 'Enter' && handleCreateFolder()}
              />
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setShowNewFolder(false);
                    setNewFolderName('');
                  }}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateFolder}
                  className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg"
                >
                  Create
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* File Preview Modal */}
        {previewFile && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {previewFile.name}
                </h3>
                <button
                  onClick={() => setPreviewFile(null)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              
              <div className="mb-4">
                {previewFile.type === 'image' ? (
                  <img
                    src={previewFile.url}
                    alt={previewFile.name}
                    className="max-w-full h-auto rounded-lg"
                  />
                ) : previewFile.type === 'video' ? (
                  <video
                    src={previewFile.url}
                    controls
                    className="max-w-full h-auto rounded-lg"
                  />
                ) : previewFile.type === 'audio' ? (
                  <audio
                    src={previewFile.url}
                    controls
                    className="w-full"
                  />
                ) : (
                  <div className="flex items-center justify-center h-64 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <div className="text-center">
                      <FiFile className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 dark:text-gray-400">
                        Preview not available for this file type
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">Size:</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">{previewFile.size}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">Type:</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400 capitalize">{previewFile.type}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">Uploaded:</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">{previewFile.uploadedAt}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">Folder:</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">{previewFile.folder}</span>
                </div>
                {previewFile.dimensions && (
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Dimensions:</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">{previewFile.dimensions}</span>
                  </div>
                )}
                {previewFile.duration && (
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Duration:</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">{previewFile.duration}</span>
                  </div>
                )}
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => handleCopyUrl(previewFile.url)}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  Copy URL
                </button>
                <a
                  href={previewFile.url}
                  download={previewFile.name}
                  className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg"
                >
                  Download
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaManager;