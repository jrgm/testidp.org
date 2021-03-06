navigator.id.beginProvisioning(function(email, certDuration) {
  navigator.id.genKeyPair(function(publicKey) {
    $.ajax({
      url: '/auth/certify',
      type: 'POST',
      dataType: 'json',
      data: {
        email: email,
        publicKey: publicKey,
        duration: certDuration
      },
      success: function (data, status, xhr) {
        navigator.id.registerCertificate(data.certificate);
      },
      error: function (xhr, status, err) {
        alert('Unable to certify keys: ' + err);
      }
    });
  });
});